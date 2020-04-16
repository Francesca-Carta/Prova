/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e95796a43731756f7e1cb60
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  test: {}
};

// Reducer
export default function testEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TEST_SUCCESS:
      return { ...state, test: action.payload };
    case types.UPDATE_TEST_SUCCESS:
      return { ...state, test: action.payload };
    case types.GET_TEST_SUCCESS:
      return { ...state, test: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}