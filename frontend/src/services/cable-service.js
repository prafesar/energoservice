const data = {
  cables: [
    { id: 'gsrrtf53', title: 'ТП 838 - СР 177', fider: 'Ф101 → МолРЭС → Чисть 1СШ' },
    { id: 'd34667fg', title: 'ТП 754 - ТП 756', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'bmjugf4567', title: 'ГКТП 755 - ТП 758', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'bnky6', title: 'ТП 756 Гастело - ТП 757 ДетСад', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'sdfg64', title: 'ТП 757 - ТП 758', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'dsfgb', title: 'Чисть - ТП 754', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'dww445kk', title: 'ГКТП 755 - ТП 838	Ф102', fider: '→ МолРЭС → Чисть 1СШ' },
    { id: '344dp9', title: 'ТП 838 - ТП 877', fider: 'Ф102 → МолРЭС → Чисть 1СШ' },
    { id: 'dsfjj', title: 'Чисть - ТП 150 Завод Извести', fider: 'Ф103 → МолРЭС → Чисть 1СШ' },
    { id: 'sdgfd', title: 'Чисть - ТП-761', fider: 'Ф104 → МолРЭС → Чисть 1СШ' },
    { id: 'gl', title: 'ТП 761 - ТП-763', fider: 'Ф104 → МолРЭС → Чисть 1СШ' },
    { id: 'hjkl', title: 'ТП 758 - ТП-760', fider: 'Ф104 → МолРЭС → Чисть 1СШ' },
    { id: 'rtyu7', title: 'ТП 763 - ТП-760', fider: 'Ф104 → МолРЭС → Чисть 1СШ' },
    { id: 'gfh23', title: 'РП2 - ТП146', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfhnkty', title: 'ТП145 - КТП13', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'wergg655', title: 'РП 3 - КТП 9', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'ffnjgrrg', title: 'КТП 5 - КТП-13', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'gdfgt6', title: 'РП 3 - КТП-8 Т2', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfgj8', title: 'РП3 - КТП-8 Т1', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfgvvf4', title: 'РП 2 - КТП-1', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfgfg', title: 'РП2 - КТП 3', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'khjgk7', title: 'РП 2 - ТП 148', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfghghgg5', title: 'ТП 147 - ТП 148', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfghdgfk7', title: 'РП 2 - КТП 5 - ТП 149', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'dfhhk', title: 'РП 2 - КТП 4', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'kpoiuiqq', title: 'РП 2 - КТП 9', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'ffgsdfgghrl', title: 'РП1 - РП2', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'rfvtym', title: 'РП3 - ТП 145', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'yj', title: 'Чисть - РП1 Компрессорная', fider: 'Ф106 → МолРЭС → Чисть 1СШ' },
    { id: 'pflybwf', title: 'ТП757 - ТП758', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'legf', title: 'ТП756 - ТП757', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'yjuf', title: 'Чисть - ТП756', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'sflyjcnm', title: 'ТП 838 - ТП 876', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'rjn', title: 'ТП 756 - ТП 876', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'dkfcnm', title: 'ТП838 - ТП 877', fider: 'Ф108 → МолРЭС → Чисть 2СШ' },
    { id: 'dfyyf', title: 'Чисть - ТП 150 Завод Извести', fider: 'Ф109 → МолРЭС → Чисть 2СШ' },
    { id: 'fahbrf', title: 'ТП759 - ТП 761', fider: 'Ф110 → МолРЭС → Чисть 2СШ' },
    { id: 'dmtnyfv', title: 'Чисть - ТП 759 Русанова', fider: 'Ф110 → МолРЭС → Чисть 2СШ' },
    { id: 'rfh', title: 'ТП761 - ТП 763', fider: 'Ф110 → МолРЭС → Чисть 2СШ' },
    { id: 'pbvfdt', title: 'ТП758 - ТП 763', fider: 'Ф110 → МолРЭС → Чисть 2СШ' },
    { id: '234', title: 'РП3 - ТП145', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '665', title: 'ТП145 - КТП13', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '65883', title: 'РП3 - КТП8 Т2', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '34333', title: 'КТП5 - КТП13', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '06543', title: 'РП3 - КТП9', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '345ghg6', title: 'РП3 - КТП8 Т1', fider: 'Ф111 → МолРЭС → Чисть 2СШ' },
    { id: '35845y', title: 'РП2 - КТП1', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'eertbb7', title: 'РП2 - ТП147', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'ertuuj7', title: 'Чисть - РП1 Компрессорная', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'ete22', title: 'РП2 - КТП5 - ТП149', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'wewvv983', title: 'РП2 - КТП2', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'dfgnn334', title: 'РП1 - РП2', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'sdfgg7454', title: 'РП2 - КТП3', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'sdfgj33', title: 'РП2 - ТП146', fider: 'Ф112 → МолРЭС → Чисть 2СШ' },
    { id: 'dsfg', title: 'Трепалово - ТП906', fider:'Ф135 → МолРЭС → Трепалово 1СШ' },
    { id: 'gfj75fgh', title: 'ТП906 - ТП907', fider: 'Ф135 → МолРЭС → Трепалово 1СШ' },
    { id: '33547hff', title: 'ТП907 - ТП908', fider: 'Ф135 → МолРЭС → Трепалово 1СШ' },
    { id: 'dfgg67', title: 'ТП729 - опора №2/52', fider: 'Ф162 → МолРЭС → Городок 1СШ' },
    { id: 'dfgg469', title: 'Гиревичи - СР головной', fider: 'Ф171 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'ddd443', title: 'ТП582 - оп.№146а', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'dsgfnn5', title: 'ГКТП600 - КТП601', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'dfgg', title: 'КТП468 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'f', title: 'КТП713 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'h', title: 'КТП658 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'y', title: 'КТП644 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'r', title: 'КТП639 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'e', title: 'КТП478 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'd', title: 'КТП466 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'b', title: 'КТП42 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'mj', title: 'КТП 951 - ОР ст.Планета Плюс', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'ku', title: 'КТП530 - ВР10', fider: 'Ф172 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'iu', title: 'Гиревичи - СР-408', fider: 'Ф173 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'lo', title: 'Гиревичи - СР Луч', fider: 'Ф174 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'de', title: 'Гиревичи - СР Колосок', fider: 'Ф175 → ВолРЭС → Гиревичи 1СШ' },
    { id: 'er', title: 'Гиревичи - СР Головной', fider: 'Ф176 → ВолРЭС → Гиревичи 1СШ' },
  ],
  fiders: [
    { number: 234, id: 'gsrrtf53', title: 'Ф101 → Чисть 1СШ' },
    { number: 234, id: 'd34667fg', title: 'Ф324 → Чисть 1СШ' },
    { number: 234, id: 'bmjugf4567', title: 'Ф433 → Чисть 1СШ' },
    { number: 234, id: 'bnky6', title: 'Ф162 → Чисть 1СШ' },
    { number: 234, id: 'sdfg64', title: 'Ф172 → Чисть 1СШ' },
    { number: 234, id: 'dsfgb', title: 'Ф442 → Чисть 1СШ' },
    { number: 234, id: 'gsrf53', title: 'Ф101 → Чисть 1СШ' },
    { number: 234, id: 'd34667fg', title: 'Ф324 → Чисть 1СШ' },
    { number: 234, id: 'bmgf4567', title: 'Ф433 → Чисть 1СШ' },
    { number: 234, id: 'bn6', title: 'Ф142 → Чисть 1СШ' },
    { number: 234, id: 'sdfg64', title: 'Ф172 → Чисть 1СШ' },
    { number: 234, id: 'dsf', title: 'Ф442 → Чисть 1СШ' },
    { number: 234, id: 'gsrrtf53', title: 'Ф101 → Чисть 1СШ' },
    { number: 234, id: 'd34667fg', title: 'Ф324 → Чисть 1СШ' },
    { number: 234, id: 'bmjugf4567', title: 'Ф433 → Чисть 1СШ' },
    { number: 234, id: 'bnky6', title: 'Ф162 → Чисть 1СШ' },
    { number: 234, id: 'sdfg64', title: 'Ф172 → Чисть 1СШ' },
    { number: 234, id: 'dsfgb', title: 'Ф442 → Чисть 1СШ' },
    { number: 234, id: 'gsrf53', title: 'Ф101 → Чисть 1СШ' },
    { number: 234, id: 'd34667fg', title: 'Ф324 → Чисть 1СШ' },
    { number: 234, id: 'bmgf4567', title: 'Ф433 → Чисть 1СШ' },
    { number: 234, id: 'bn6', title: 'Ф142 → Чисть 1СШ' },
    { number: 234, id: 'sdfg64', title: 'Ф172 → Чисть 1СШ' },
  ]
}
export default {
  getCableListByUnitId,
  getCableListByFiderId,
  getCableById,
  getFiderListByUnitId
}

export function getCableListByUnitId(unitId) {
  console.log(unitId);
  return data.cables;
}

export function getFiderListByUnitId(unitId) {
  console.log('get fiderList by unit Id' + unitId);
  return data.fiders;
}

export function getCableListByFiderId(fiderId) {
  console.log(fiderId);
  return data.cables.slice(10, 25);
}

export function getCableById(cableId) {
  return data.cables.find(cable => cable.id === cableId);
}
