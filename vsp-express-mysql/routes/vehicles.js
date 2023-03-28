var express = require('express');
var router = express.Router();
var db = require('../service/db.js');

const vdata = [
    {brand: 'Tata', model: 'Indica', rn: 'TA IND 1354', distance: 7263},
    {brand: 'Tata',  model: 'Safari', rn: 'TA SFR 0365', distance: 6961},
    {brand: 'Maruti', model: 'Alto', rn: 'MA ALT 3973', distance: 1340},
    {brand: 'Maruti', model: 'WagonR', rn: 'MA WGR 7434', distance: 98335},
    {brand: 'Maruti', model: 'Swift', rn: 'MA SFT 2103', distance: 9970},
    {brand: 'Maruti', model: 'Dezire', rn: 'MA DZR 5400', distance: 7024},
    {brand: 'Hyundai', model: 'Grand i10', rn:'HY I10 9200', distance: 5758},
    {brand: 'Hyundai', model: 'i20', rn: 'HY I20 7000', distance: 70273},
    {brand: 'Hyundai', model: 'Verna', rn: 'HY VRN 7691', distance: 1950},
    {brand: 'Hyundai', model: 'Tucson', rn:'HY TSN 7020', distance: 3973},
    {brand: 'Honda', model: 'City', rn: 'HND CTY 2022', distance: 6719},
    {brand: 'Honda', model: 'Amaze', rn: 'HND AMZ 5757', distance: 2495},
    {brand: 'Honda', model: 'WR-V',  rn: 'HND WRV 3744', distance: 17046},
    {brand: 'Toyota', model: 'Glanza', rn: 'TYT GLN 2417', distance: 9368},
    {brand: 'Toyota',  model: 'Fortuner', rn: 'TYT FRT 7125', distance: 85767},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(vdata);
});

module.exports = router;
