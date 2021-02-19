export default {
  scenarios: [],
  count: 0,
  apiCallsInProgress: 0,

  filters: {
    explorer: '',
    years: [],
    scenarios: [],
    usStates: [],
    levelOneFilters: [{
      label: '',
      slug: '', // active: boolean
      levelTwoFilters: [{
        label: '',
        slug: '',// active: boolean
      }]
    }],
    table: '',
    page: 0,
    url: ''
  }

}