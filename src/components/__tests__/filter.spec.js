import { shallow } from '@vue/test-utils'
import Filter from '@/components/Multiselect/Filter'

describe('Filter', () => {
  let filter;

  beforeAll(() => {
    filter = shallow(Filter, {
      propsData: {
        items: []
      }
    })
  })

  it('should have empty items at start', () => {
    expect(filter.vm.items).toEqual([])
  })

  it('should have checked as selected filter', () => {
    expect(filter.vm.selectedFilter[0]).toBe('checked')
  })

  it('should filter items checked', () => {
    filter.setProps({
      items: [{checked: true}, {checked: false}]
    });
    expect(filter.vm.itemsChecked).toEqual([{checked: true}])
  })

  it('should filter items unchecked', () => {
    filter.setProps({
      items: [{checked: true}, {checked: false}]
    });
    expect(filter.vm.itemsUnchecked).toEqual([{checked: false}])
  })

  it('should emit checked items list when send checked list', () => {
    filter.setProps({
      items: [{checked: true}]
    })
    filter.vm.sendChecked();
    expect(filter.emitted().checkedItemsList).toEqual([[[{checked: true}]]])
  })

  it('should selected filter must be checked when send checked items', () => {
    filter.vm.sendChecked();
    expect(filter.vm.selectedFilter).toBe('checked')
  })

  it('should emit unchecked items list when send unchecked items', () => {
    filter.setProps({
      items: [{checked: false}]
    })
    filter.vm.sendUnchecked();
    expect(filter.emitted().uncheckedItemsList).toEqual([[[{checked: false}]]])
  })

  it('should selected filter must be unchecked when send unchecked items', () => {
    filter.vm.sendUnchecked();
    expect(filter.vm.selectedFilter).toBe('unchecked')
  })

})