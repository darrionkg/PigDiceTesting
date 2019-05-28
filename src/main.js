import { someFunction } from './pigdice';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    var output = someFunction("This is output from pigdice.js");
    $('#output').text(output);
});