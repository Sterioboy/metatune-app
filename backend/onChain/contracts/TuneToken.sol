// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TuneToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("TuneToken", "TUNE") Ownable(){}

    receive() external payable {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

}
