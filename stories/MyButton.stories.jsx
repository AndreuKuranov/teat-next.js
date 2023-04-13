import MyButton from "../components/iu/MyButton/MyButton";

export default {
  title: 'Example/MyButton',
  component: MyButton,
  argTypes: {
    color: {
      type: 'string',
      descrption: 'Варианты',
      defaultValue: 'red',
      option: ['red', 'orange', 'green', 'blue'],
    },
  },
};

export const RedBtn = {
  args: {
    children: 'test'
  },
};

export const OrangeBtn = {
  args: {
    color: 'orange',
    children: 'test'
  },
};

export const BigBtn = {
  args: {
    ...OrangeBtn.args,
    big: true,
  },
};

export const CustomButton = {
  render: (args) => (
    <div>
      <MyButton {...args}>
        <span style={{fontStyle: 'italic'}}>{args.children}</span>
      </MyButton>
    </div>
  ),
  args: {
    big: true,
    children: 'test',
    color: 'red',
  },
};

export const Primary = {
  args: {
    big: true,
    children: 'test',
  },
  parameters: {
    color: {
      values: ['red', 'green', 'blue'],
    },
  },
};
