/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import constants from "../constants";
const initialState = [];

function update(state = initialState, action) {
  const { seqId } = action;

  if (action.type === constants.NAVIGATE) {
    return initialState;
  } else if (seqId) {
    let newState;
    if (action.status === "start") {
      newState = [...state, seqId];
    } else if (action.status === "error" || action.status === "done") {
      newState = state.filter(id => id !== seqId);
    }

    return newState;
  }

  return state;
}

module.exports = update;
