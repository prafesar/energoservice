const data = {
  units: [
    {
      id: 'molRes',
      number: 17,
      branchId: 'molEs',
      title: 'Молодечненский РЭС'
    },
    {
      id: 'gorRes',
      number: 18,
      branchId: 'molEs',
      title: 'Городской РЭС'
    },
    {
      id: 'mjadRes',
      number: 19,
      branchId: 'molEs',
      title: 'Мядельский РЭС'
    },
    {
      id: 'volRes',
      number: 20,
      branchId: 'molEs',
      title: 'Воложинский РЭС'
    },
    {
      id: 'vilRes',
      number: 21,
      branchId: 'molEs',
      title: 'Вилейский РЭС'
    },
  ]
}
export default {
  getCurrentBranchId: function() {
    return 'molEs';
  },
  getUnitListByBranchId: function(branchId) {
    return data.units.filter(unit => unit.branchId === branchId);
  },
}