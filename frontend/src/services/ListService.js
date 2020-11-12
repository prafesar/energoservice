Initimport axios from 'axios'
    
const apiClient = axios.create({  // The single Axios instance we use for calls
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCableListByUnitId(unitId) {

  },
  getStationListByUnitId(unitId) {

  },
  getSubStationListByUnitId(unitId) {

  },
  getUnitListByBranchId(branchId) {
    
  }
}
