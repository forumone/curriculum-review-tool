from django.test import TestCase

from wagtail.wagtaildocs.models import Document

from model_mommy import mommy
from teachers_digital_platform.models import (
    ActivityAgeRange, ActivityBloomsTaxonomyLevel, ActivityBuildingBlock,
    ActivityCouncilForEconEd, ActivityDuration, ActivityGradeLevel,
    ActivityJumpStartCoalition, ActivityPage, ActivitySchoolSubject,
    ActivityTeachingStrategy, ActivityTopic, ActivityType
)


class TestActivityPage(TestCase):
    fixtures = ['tdp_initial_data']

    def setUp(self):
        super(TestActivityPage, self).setUp()

    def test_get_subtopic_ids_returns_correct_subtopics(self):
        # Arrange
        activity_page = self.create_activity_detail_page('Test', 'test')
        # Act
        actual_subtopic_ids = activity_page.get_subtopic_ids()
        # Assert
        self.assertTrue(6 not in actual_subtopic_ids)
        self.assertTrue(7 in actual_subtopic_ids)

    def test_get_subtopic_ids_works_with_no_topics(self):
        # Arrange
        activity_page = self.create_activity_detail_page(
            'Test',
            'test',
            topic_list=[]
        )
        # Act
        actual_subtopic_ids = activity_page.get_subtopic_ids()
        # Assert
        self.assertIsInstance(actual_subtopic_ids, set)
        self.assertFalse(actual_subtopic_ids)

    def test_get_subtopic_ids_works_with_no_subtopics(self):
        # Arrange
        activity_page = self.create_activity_detail_page('Test', 'test', topic_list=[6])  # noqa: E501
        # Act
        actual_subtopic_ids = activity_page.get_subtopic_ids()
        # Assert
        self.assertTrue(isinstance(actual_subtopic_ids, (list, set)))
        self.assertFalse(actual_subtopic_ids)

    def test_get_grade_level_ids_returns_correct_grade_levels(self):
        # Arrange
        activity_page = self.create_activity_detail_page('Test', 'test')
        # Act
        actual_grade_level_ids = activity_page.get_grade_level_ids()
        # Assert
        self.assertTrue(2 in actual_grade_level_ids)
        self.assertEqual(len(actual_grade_level_ids), 1)

    def test_get_grade_level_ids_works_with_no_grade_levels(self):
        # Arrange
        activity_page = self.create_activity_detail_page('Test', 'test', grade_level_list=[])  # noqa: E501
        # Act
        actual_grade_level_ids = activity_page.get_grade_level_ids()
        # Assert
        self.assertTrue(isinstance(actual_grade_level_ids, (list, set)))
        self.assertFalse(actual_grade_level_ids)

    def create_activity_detail_page(self, title='title', slug='slug', topic_list=[6, 7], grade_level_list=[2]):  # noqa: E501
        activity_page = ActivityPage(
            live=True,
            title=title,
            slug=slug,
            path=slug,
            activity_file=mommy.make(Document),
            date="2018-07-31",
            summary="Students will discuss short-term and long-term goals and what\r\nmakes a goal SMART. They\u2019ll then create a short-term savings goal\r\nand make a plan to meet that goal.",  # noqa: E501
            big_idea="<p>Saving money is essential to a positive\u00a0financial future.</p>",  # noqa: E501
            objectives="<ul><li>Understand the importance of setting SMARTsavings goals<br/></li><li>Create a short-term SMART savings goal</li><li>Make an action plan to save money</li></ul>",  # noqa: E501
            essential_questions="<p></p><ul><li>How can I reach my savings goals?<br/></li></ul><p></p>",  # noqa: E501
            what_students_will_do="<ul><li>Use the \u201cCreating a savings plan\u201d worksheet to\u00a0brainstorm a financial goal<br/></li><li>Create a SMART goal and a savings plan to\u00a0achieve this goal</li></ul>",  # noqa: E501
            building_block=ActivityBuildingBlock.objects.filter(pk__in=[2]).all(),  # noqa: E501
            school_subject=ActivitySchoolSubject.objects.filter(pk__in=[1, 4]).all(),  # noqa: E501
            topic=ActivityTopic.objects.filter(pk__in=topic_list).all(),
            grade_level=ActivityGradeLevel.objects.filter(pk__in=grade_level_list).all(),  # noqa: E501
            age_range=ActivityAgeRange.objects.filter(pk__in=[2]).all(),
            student_characteristics=[],
            activity_type=ActivityType.objects.filter(pk__in=[1, 2, 3]).all(),
            teaching_strategy=ActivityTeachingStrategy.objects.filter(pk__in=[6, 7]).all(),  # noqa: E501
            blooms_taxonomy_level=ActivityBloomsTaxonomyLevel.objects.filter(pk__in=[6]).all(),  # noqa: E501
            activity_duration=ActivityDuration.objects.get(pk=2),
            council_for_economic_education=ActivityCouncilForEconEd.objects.filter(pk__in=[4]).all(),  # noqa: E501
            jump_start_coalition=ActivityJumpStartCoalition.objects.filter(pk__in=[1]).all()  # noqa: E501
        )
        return activity_page
