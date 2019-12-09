import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import CriterionScoreBlock from "../summary/CriterionScoreBlock";
import DimensionScoreBlock from "../summary/DimensionScoreBlock";
import DimensionInformation from "../../common/DimensionInformation";
import SaveWorkInformation from "../../common/SaveWorkInformation";
import { ContentElementaryCriterion } from "../../../content_data/contentElementary";

export default class ContentElementarySummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h1 tabIndex="0" id={this.props.currentPage + "_dimensionTitle"}>
                    <SvgIcon
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Content summary
                </h1>
                <p className="lead-paragraph">
                    {C.CONTENT_SUMMARY_LEAD_TEXT}
                </p>
                <p>
                    {C.CONTENT_SUMMARY_SECOND_PARAGRAPH}
                </p>
                <SaveWorkInformation {...this.props} />
                <button className="a-btn" data-gtm_ignore="true" onClick={(e) => {this.props.printButtonClicked(C.CONTENT_PAGE, true); e.preventDefault();}}>
                    {C.CONTENT_PRINT_SUMMARY}
                </button>
                <DimensionInformation dimensionName={C.CONTENT_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[0].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[0].title}
                    criterionLead={ContentElementaryCriterion.criterion[0].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[0].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[0].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[0].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[1].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[1].title}
                    criterionLead={ContentElementaryCriterion.criterion[1].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[1].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[1].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[1].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />


                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[2].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[2].title}
                    criterionLead={ContentElementaryCriterion.criterion[2].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[2].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[2].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[2].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[3].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[3].title}
                    criterionLead={ContentElementaryCriterion.criterion[3].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[3].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[3].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[3].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[4].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[4].title}
                    criterionLead={ContentElementaryCriterion.criterion[4].criterionLead}
                    criterionExceedsText={ContentElementaryCriterion.criterion[4].criterionExceedsText}
                    criterionMeetsText={ContentElementaryCriterion.criterion[4].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[4].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentElementaryCriterion.criterion[5].criterionNumber}
                    criterionName={ContentElementaryCriterion.criterion[5].title}
                    criterionLead={ContentElementaryCriterion.criterion[5].criterionLead}
                    criterionMeetsText={ContentElementaryCriterion.criterion[5].criterionMeetsText}
                    criterionDoesNotMeetText={ContentElementaryCriterion.criterion[5].criterionDoesNotMeetText}
                    essentialAnswerTotalText={C.ESSENTIAL_ANSWER_TOTAL_TEXT}
                    {...this.props} />

                <hr className="hr u-mb45 u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey={C.CONTENT_ELEMENTARY_KEY}
                    dimensionName={C.CONTENT_PAGE}
                    dimensionLead={C.CONTENT_LEAD_TEXT}
                    strongText={C.CONTENT_STRONG_TEXT}
                    moderateText={C.CONTENT_MODERATE_TEXT}
                    limitedText={C.CONTENT_LIMITED_TEXT}
                    {...this.props} />
            </React.Fragment>
        );
    }
}
