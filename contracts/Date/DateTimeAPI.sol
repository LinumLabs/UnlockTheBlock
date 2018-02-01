pragma solidity ^0.4.16;
contract DateTimeAPI {
        /*
         *  Abstract contract for interfacing with the DateTime contract.
         *
         */
         
        function isLeapYear(uint16 year) public constant returns (bool);
        function getYear(uint timestamp) public constant returns (uint16);
        function getMonth(uint timestamp) public constant returns (uint8);
        function getDay(uint timestamp) public constant returns (uint8);
        function getHour(uint timestamp) public constant returns (uint8);
        function getMinute(uint timestamp) public constant returns (uint8);
        function getSecond(uint timestamp) public constant returns (uint8);
        function getWeekday(uint timestamp) public constant returns (uint8);
        function toTimestamp(uint16 year, uint8 month, uint8 day) public constant returns (uint timestamp);
        function toTimestamp(uint16 year, uint8 month, uint8 day, uint8 hour) public constant returns (uint timestamp);
        function toTimestamp(uint16 year, uint8 month, uint8 day, uint8 hour, uint8 minute) public constant returns (uint timestamp);
        function toTimestamp(uint16 year, uint8 month, uint8 day, uint8 hour, uint8 minute, uint8 second) public constant returns (uint timestamp);
}

