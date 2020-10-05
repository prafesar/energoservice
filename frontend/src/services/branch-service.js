const data = {
  branches: [
    {
      id: 'molEs',
      title: 'Молодечненские ЭС',
      shortTitle: 'МолЭС'
    }
  ],
  units: [
    {
      id: 'molRes',
      number: 17,
      branchId: 'molEs',
      title: 'Молодечненский РЭС',
      shortTitle: 'МолРЭС'
    },
    {
      id: 'gorRes',
      number: 18,
      branchId: 'molEs',
      title: 'Городской РЭС',
      shortTitle: 'ГорРЭС'
    },
    {
      id: 'mjadRes',
      number: 19,
      branchId: 'molEs',
      title: 'Мядельский РЭС',
      shortTitle: 'МядРЭС'
    },
    {
      id: 'volRes',
      number: 20,
      branchId: 'molEs',
      title: 'Воложинский РЭС',
      shortTitle: 'ВолРЭС'
    },
    {
      id: 'vilRes',
      number: 21,
      branchId: 'molEs',
      title: 'Вилейский РЭС',
      shortTitle: 'ВилРЭС'
    },
  ]
}
export default {
  getBranchById,
  getUnitListByBranchId,
  getUnitById
}

export function getBranchById(branchId) {
  const res = data.branches.find(br => br.id === branchId);
  console.log(res);
  return res;
}

export function getUnitListByBranchId(branchId) {
  const res = data.units.filter(unit => unit.branchId === branchId);
  console.log(res);
  return res;
}

export function getUnitById(unitId) {
  return data.units.find(unit => unit.id === unitId);
}
