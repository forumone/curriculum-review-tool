import json
import time
from datetime import datetime

from django.core.exceptions import ValidationError
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.utils import timezone

from crtool.models import CurriculumReviewSession


def create_review(request):
    if request.method == 'POST':
        fd = json.loads(request.body.decode("utf-8"))

        title = fd['tdp-crt_title'] if 'tdp-crt_title' in fd else ''
        pub_date = fd['tdp-crt_pubdate'] if 'tdp-crt_pubdate' in fd else ''
        grade_range = fd['tdp-crt_grade'] if 'tdp-crt_grade' in fd else ''
        pass_code = CurriculumReviewSession.pc_generator()
        review_id = CurriculumReviewSession.id_generator()
        last_updated = timezone.now()

        if not title or not grade_range:
            return HttpResponse(status=400)
        data = {
            # Session ID, >128-bit entropy
            'id': str(review_id),
            # Password, lower entropy but we at least force users using this to
            # wait a second to avoid brute-forcing.
            'pass_code': str(pass_code),
            'last_updated': str(datetime.isoformat(last_updated)),
            'curriculumTitle': title,
            'publicationDate': pub_date,
            'gradeRange': grade_range
        }

        review = CurriculumReviewSession.objects.create(
            id=review_id,
            pass_code=pass_code,
            last_updated=last_updated,
            data=data
        )

        if review:
            return JsonResponse(review.data)

    return HttpResponse(status=404)


def get_review_by_id(request):
    data = {}
    if request.method == 'POST':
        review_id = request.POST.get('token')
        try:
            review = CurriculumReviewSession.objects.get(id=review_id)
            if review:
                data = review.data
        except (
            CurriculumReviewSession.DoesNotExist,
            ValueError,
            ValidationError
        ):
            return HttpResponse(status=404)

        return JsonResponse(data)

    return HttpResponse(status=404)


def continue_review(request):
    data = {}
    if request.method == 'POST':
        pass_code = request.POST.get('pass_code')
        # Critical pause to prevent brute-forcing the shorter pass_code values
        time.sleep(1)
        try:
            review = CurriculumReviewSession.objects.get(pass_code=pass_code)
            if review:
                data = review.data
        except (
            CurriculumReviewSession.DoesNotExist,
            ValueError,
            ValidationError
        ):
            return HttpResponse(status=404)

        return HttpResponseRedirect('../tool/#id=' + data.get('id'))

    return HttpResponse(status=404)

def update_review(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        if "id" in data:
            try:
                review = CurriculumReviewSession.objects.get(id=data["id"])
                if review:
                    # Update last_updated date
                    last_updated = timezone.now()
                    iso_last_updated = str(datetime.isoformat(last_updated))
                    data['last_updated'] = iso_last_updated
                    review.data = data
                    review.last_updated = last_updated
                    review.save()
                    return JsonResponse(review.data)
            except (
                CurriculumReviewSession.DoesNotExist,
                ValueError,
                ValidationError
            ):
                return HttpResponse(status=404)

    return HttpResponse(status=404)
