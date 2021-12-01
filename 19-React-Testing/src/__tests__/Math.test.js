import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 20
  const b = 10
  const expected = 30
  // Act
  const result = Add(a, b)
  // Assert
  expect(result).toBe(expected)

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 20
  const b = 10
  const expected = 10
  // Act
  const result = Substract(a, b)
  // Assert
  expect(result).toBe(expected)
})

test('Return multiplication of two arguments', () => {
 // Arrange
 const a = 20
 const b = 10
 const expected = 200
 // Act
 const result = Multiplication(a, b)
 // Assert
 expect(result).toBe(expected)
})