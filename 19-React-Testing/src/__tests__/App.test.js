import { AddTodo } from '../components/helper';
import { Add } from '../Math';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];

  const newTod0 = [
    {
      id : 4,
      name : 'Getting Started',
      isComplete : false
    }
  ];

  const expected = [newTod0, ...defaultTodo]
  // Act
  const result = AddTodo(defaultTodo, newTod0)
  // Assert
  result.map((result, id) => {
    expect(result).toBe(expected[id])
  })
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const defaultTodo = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Ship it',
      isComplete: false,
    }
  ];

  const newTod0 = [
    {
      id : 4,
      name : 'Getting Started',
      isComplete : false
    }
  ];

  const notExpected = defaultTodo
  // Act
  const result = AddTodo(defaultTodo, newTod0)
  // Assert
  expect(result).not.toBe(notExpected)


})