import { shallowMount, mount } from '@vue/test-utils';
import Comparator from '@/components/Comparator/Comparator.vue';

import content from '@/assets/content/content.json';

describe('Comparator table', () => {
  it('Contains 5 child', () => {
    const wrapper = shallowMount(Comparator, {
      props: { options: content.options },
    });
    const components = wrapper.findAllComponents({ name: 'ComparatorItem' });
    expect(components.length).toEqual(5);
  });

  it('Contains 3 child', () => {
    const wrapper = shallowMount(Comparator, {
      props: { options: content.options.slice(0, 3) },
    });
    const components = wrapper.findAllComponents({ name: 'ComparatorItem' });
    expect(components.length).toEqual(3);
  });

  it('Comparator Item click active', async () => {
    const wrapper = mount(Comparator, {
      propsData: { options: content.options },
    });
    const component = wrapper.findComponent({ name: 'ComparatorItem' });
    await component.trigger('click');
    expect(component.classes()).toContain('comparator-item--active');
  });
});
