var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var configureStore = require('configureStore');
//var TodoApp = require('TodoApp');
import {TodoApp} from 'TodoApp';
//var TodoList = require('TodoList');
import TodoList from 'TodoList'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

  // it('should add todo to the todos state handleAddTodo', () => {
  //   var todoText = 'test text';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({
  //     todos: []
  //   });
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  //
  // });

  // it('should toggle completed values when handleToggle called', () => {
  //   var todoData = {
  //       id: 11,
  //       text: 'Test features',
  //       completed: false,
  //       createdAt: 0,
  //       completedAt: undefined
  //   };
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({
  //     todos: [todoData]
  //   });
  //
  //   // check that todos first item has completed value of false
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   // call handleToggle() with 11
  //   todoApp.handleToggle(11);
  //   // verify that value changed
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  //
  // });

  // // Test that when toggle from true to false, completedAt get removed
  // it('should remove completedAt when toggled from true to false', () => {
  //   var todoData = {
  //       id: 11,
  //       text: 'Test features',
  //       completed: true,
  //       createdAt: 0,
  //       completedAt: 123
  //   };
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({
  //     todos: [todoData]
  //   });
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //
  //   // call handleToggle() with 11
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   // Expect completedAt is undefined
  //   //expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  //
  // });

});
