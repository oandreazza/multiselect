import { shallow } from '@vue/test-utils'
import multivalored from '@/components/multivalored'

describe('Multivalored', () => {
  it('should available items must be empty', () => {
    const wrapper = shallow(multivalored)
    expect(wrapper.vm.multivalored.availables).toEqual([])
  })

  it('should chosen items must be empty', () => {
    const wrapper = shallow(multivalored)
    expect(wrapper.vm.multivalored.chosen).toEqual([])
  })

  it('should available items must be empty', () => {
    const wrapper = shallow(multivalored)
    expect(wrapper.vm.multivalored.availables).toEqual([])
  })
})