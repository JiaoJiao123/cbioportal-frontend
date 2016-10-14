/**
 * Created by jiaojiao on 10/14/16.
 */
import Immutable from 'immutable';
import getDatasetsInfo from './getDatasetsInfo';

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff

        case actionTypes.FETCH:

            switch (action.meta.status) {

                case 'fetching':

                    return state.set('status', 'fetching');

                case 'success':

                    return state.withMutations((state) => {
                    state.set('status', 'complete');
                    state.set('datasets', Immutable.List(action.payload.datasets));
            });

        case 'error':

            return state.set('status', 'error');

        default:

            return state;

    }

}
};

export function loadDatasetsInfo() {
    // this is a thunk
    return (dispatch) => {
        getDatasetsInfo().then(
            (data) => {
            dispatch({
                type: actionTypes.FETCH,
                meta: { status: 'success' },
                payload: data,
            });
        }
    );

        dispatch({
            type: actionTypes.FETCH,
            meta: { status: 'fetching' },
        });
    };
};


export const actionCreators = {
    loadDatasetsInfo
};

export const mapStateToProps = function mapStateToProps(state) {
    return {
        datasets: state.get('datasetView').get('datasets')
    };
};
