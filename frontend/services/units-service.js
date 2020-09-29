const data = {
  units: [
    {
      id: 'molRes',
      branchId: 'molEs',
      title: 'Молодечненский РЭС'
    },
    {
      id: 'gorRes',
      branchId: 'molEs',
      title: 'Городской РЭС'
    },
    {
      id: 'mjadRes',
      branchId: 'molEs',
      title: 'Мядельский РЭС'
    },
    {
      id: 'volRes',
      branchId: 'molEs',
      title: 'Воложинский РЭС'
    },
    {
      id: 'vilRes',
      branchId: 'molEs',
      title: 'Вилейский РЭС'
    },
  ]
}
export default {
  getUnitListByBranchId: function(branchId) {
    return data.units.filter(unit => unit.branchId === branchId);
  }
}