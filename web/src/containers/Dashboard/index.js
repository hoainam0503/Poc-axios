import React from 'react';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import { FadeLoader } from 'react-spinners';
import ShowData from '../PocSimple/ShowData';
// import JiraIssue from '../JiraIssue/index';

function Dashboard({
  loading,
}) {
  console.log(process.env.IOTMJira);
  return (
    <div>
      <LoadingOverlay
        active={loading}
        spinner={<FadeLoader color="#FFED00" />}
        text="Processing ..."
        styles={{
          wrapper: {
            overflow: 'hidden',
          },
          overlay: (base) => ({
            ...base,
            zIndex: 1350,
          }),
        }}
      >
        <ShowData />
        {/* <JiraIssue /> */}
      </LoadingOverlay>

    </div>

  );
}
const mapStatetoProps = (state) => ({
  loading: state.loadingBar.default !== undefined && state.loadingBar.default !== 0,
});
export default connect(mapStatetoProps)(Dashboard);
