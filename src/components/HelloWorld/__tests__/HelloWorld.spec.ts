import HelloWorld from '../HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('Hello World', () => {
  it('should expose the defualt value', async () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.find('h1').text()).toBe('Hello world')
  })

  it('should expose the alierza props', async () => {
    const wrapper = mount(HelloWorld, { props: { text: 'alireza' } })

    expect(wrapper.find('h1').text()).toBe('Hello alireza')
  })
})
