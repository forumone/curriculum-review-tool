import React from "react";

export default class SaveWorkModal extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /** Set the wrapper ref */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /** Alert if clicked on outside of element */
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        let saveWorkModalDialog = document.getElementById('modal-save-work');
        if (saveWorkModalDialog.classList.contains('o-modal__visible')) {
            saveWorkModalDialog.classList.remove('o-modal__visible');
        }
      }
    }

    openSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('modal-save-work');
        saveWorkModalDialog.classList.add('o-modal__visible');
    }

    closeSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('modal-save-work');
        saveWorkModalDialog.classList.remove('o-modal__visible');
    }

    render() {
        return (
            <React.Fragment>
                <button className="a-btn a-btn__link" onClick={(e) => {this.openSaveWorkModalDialog()}}>
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm59.5 816.2c-6.5 15.2-18.6 27.3-33.7 33.7l-.3.1c-7.7 3.2-15.9 4.9-24.2 4.9-25.8.2-49.2-15.1-59.3-38.9-10.2-23.7-4.8-51.2 13.6-69.3 6-5.7 12.9-10.3 20.6-13.4 7.9-3.3 16.5-5 25.1-5 8.3 0 16.5 1.7 24.2 5l.2.1c7.5 3.2 14.3 7.7 20.2 13.4 18.3 18.2 23.6 45.6 13.6 69.4zm115.7-430.5c-4.1 15.2-10.1 29.9-17.7 43.7-7 12.4-15.1 24.2-24.2 35.1-8.8 10.4-17.3 20.3-25.4 29.5-.4.4-.8.8-1.2 1.3-7.6 8-14.6 15.6-20.8 22.9-6.6 7.6-12.4 15.9-17.4 24.7-5.2 9.2-9.1 19.1-11.8 29.3-2.8 10.7-4.3 23.2-4.3 37.2v2.2c0 27.4-22.4 49.8-50 49.8s-50-22.4-50-50v-2.2c0-22.7 2.6-43.8 7.6-62.9 4.9-18.6 12.1-36.4 21.6-53.2 8.2-14.3 17.7-27.8 28.5-40.3 7.1-8.3 15.1-17 23.6-26 7.3-8.3 15.1-17.3 23.1-26.8 5.2-6.3 9.8-13 13.8-20.1 3.6-6.7 6.4-13.8 8.4-21.2 1.4-5.1 3.1-14.1 3.1-28.4a80.7 80.7 0 0 0-6.2-32.5c-4.1-10.1-10.1-19.2-17.7-27-7.5-7.6-16.5-13.7-26.4-17.8-9.7-4.2-20.1-6.2-30.7-6-10.9-.2-21.7 1.9-31.7 6.2-20.5 8.5-36.7 24.8-45.2 45.3-4.3 10-6.4 20.9-6.2 31.8v1.2c0 27.6-22.4 50-50 50s-50-22.4-50-50v-1.3c0-25.5 4.7-48.8 14.3-71.2 18.5-44 53.5-79 97.4-97.6 22.4-9.7 45.8-14.4 71.3-14.4 24.2-.2 48.3 4.7 70.5 14.4 43.7 18.7 78.3 53.7 96.4 97.6 9.5 22.5 14.1 45.8 14.1 71.4 0 20.5-2.3 39.1-6.8 55.3z"/></svg></span>&nbsp;
                    Can I save my work?
                </button>
                <div className="o-modal"
                    id="modal-save-work"
                    aria-hidden="true"
                    role="alertdialog"
                    aria-labelledby="modal-save-work_title"
                    aria-describedby="modal-save-work_desc">
                    <div className="o-modal_backdrop"></div>
                    <div className="o-modal_container">
                        <form className="o-modal_content">
                            <span ref={this.setWrapperRef}>
                                <div className="o-modal_body">
                                    <button className="o-modal_close a-btn a-btn__link" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>
                                        Close
                                        &nbsp;<span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg></span>
                                    </button>
                                    <h1 id="modal-save-work_title">Saving your work</h1>
                                    <div id="modal-save-work_desc">
                                        <p>This tool uses cookies to <strong>temporarily</strong> save your work. To see answers you’ve already completed, you need to use the same computer and browser, and don’t clear your cookies.</p>
                                        <p>To save a permanent copy of your work, please print the summary or save it as a PDF for every dimension as you complete it. You can also print or save a summary of the entire review. Learn how to <a href="https://www.consumerfinance.gov/consumer-tools/save-as-pdf-instructions/" target="_blank" rel="noopener noreferrer">save the summary as a PDF</a>.</p>
                                        <p>You can only work on a single curriculum at a time</p>
                                    </div>
                                </div>
                                <div className="o-modal_footer">
                                    <button className="a-btn" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>Close</button>
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
