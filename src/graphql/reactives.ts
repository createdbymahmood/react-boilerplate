import { gql, makeVar as createReactiveVariable } from '@apollo/client';

export const todos = createReactiveVariable([] as {}[]);

/**
 * @usage
 * const data = useReactiveVar(todos); const push = () => todos([...data, { id: data.length + 1, title: 'new todo' }]);
 */
