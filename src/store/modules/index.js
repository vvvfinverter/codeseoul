import { combineReducers } from 'redux';
import { default as test } from './test';

const modules = { };

modules['test'] = test;

export default combineReducers(modules);