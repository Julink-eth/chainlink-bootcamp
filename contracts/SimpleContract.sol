pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;


contract SimpleContract {
 
    uint256 number;
    string[] names;
    mapping (string => uint) public phoneNumbers;
 
    function changeNumber(uint256 _num) public {
        number = _num;
    }
 
 
    function getNumber() public view returns (uint256){
        return number;
    }
    
    
    function addName(string memory _name) public {
        names.push(_name);
    }
    
    
    function getName(uint _index) public view returns (string memory) {
        return names[_index];
    }
    
    
    function addMobileNumber(string memory _name, uint _mobileNumber) public {
        phoneNumbers[_name] = _mobileNumber;
    }
    
    
    function getMobileNumber(string memory _name) public view returns (uint) {
        return phoneNumbers[_name];
    }


    function getNamesLength() public view returns (uint) {
        return names.length;
    }
    
    
    function getNames() public view returns (string[] memory) {
        return names;
    }
}
