import { Counter } from "./counter";

export default {
    title: 'Counter Molecule',
    component: Counter,
};

export const Default = (arg: any) => <Counter {...arg} />