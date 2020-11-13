import axios from 'axios'
    
const apiClient = axios.create({  // The single Axios instance we use for calls
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCableListByTeamId(teamId) {
    const response = apiClient.get('/lists?type=cables&teamId=' + teamId)
    const data = JSON.parse(response);
    return data.map(({
      cables: [
        teamId, stId, stTitle, fidId, fidNum, cabId, cabTitle, cabYear, cabLength, owner
      ]
    }) => {
      return {
        team: {
          id: teamId
        },
        station: {
          id: stId,
          title: stTitle
        },
        fider: {
          id: fidId,
          numer: fidNum
        },
        id: cabId,
        title: cabTitle,
        year: cabYear,
        length: cabLength,
        owner: owner
      }
    })
  },

  getStationListByTeamId() {

  },
  getSubStationListByTeamId() {

  },
  getUnitListByBranchId() {
    
  }
}

