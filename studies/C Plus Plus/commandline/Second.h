//
//  Second.h
//  commandline
//
//  Created by Mark Barber on 7/18/15.
//  Copyright (c) 2015 Mark Barber. All rights reserved.
//

#ifndef __commandline__Second__
#define __commandline__Second__

#include <stdio.h>


//
//  Second.cpp
//  commandline
//
//  Created by Mark Barber on 7/18/15.
//  Copyright (c) 2015 Mark Barber. All rights reserved.
//

#include "Second.h"
#include <iostream>


class MathUtils
{
public:
	static float average(int a, int b)
	{
		return (a + b) / 2.0f;
	}
};

//double t = average(2, 3);
//std::cout << std::to_string(t) << std::endl;


class AreAnagrams
{
public:
	static bool areStringsAnagrams(std::string a, std::string b)
	{
		for (int ctr = 0 ; ctr < a.length(); ++ctr)
		{
			std::size_t t = b.find(a[ctr]);
			if (t != std::string::npos)
				b.erase(t, 1);
			else
				return false;
		}
		
		return b.length() == 0;
	}
};

//std::cout << "Answer: " << std::to_string(AreAnagrams::areStringsAnagrams("momdad", "dadmom")) << std::endl;;


class Palindrome
{
public:
	static bool isPalindrome(std::string str)
	{
		std::transform(str.begin(), str.end(),str.begin(), ::toupper);
		
		for (auto c : str)
			if (ispunct(c)) str.erase(str.find_first_of(c));
		
		for (int ctr = 0; ctr < str.length(); ++ctr)
		{
			unsigned long comparable = str.length() - ctr - 1;
			
			
			if (ctr >= comparable)
				break;
			
			char left = str[ctr];
			char right = str[comparable];
			
			if (left != right)
				return false;
		}
		
		return true;
	}
};

//
//std::cout << "Answer: "
//<< std::to_string(Palindrome::isPalindrome("Noel sees Leon."))
//<< std::endl;


class Answer
{
public:
	static bool binarySearch(int ints[], int lowerbound, int upperbound, int key)
	{
		int position;
		
		// To start, find the subscript of the middle position.
		position = ( lowerbound + upperbound) / 2;
		
		while((ints[position] != key) && (lowerbound <= upperbound))
		{
			if (ints[position] > key)               // If the number is > key, ..
			{                                                       // decrease position by one.
				upperbound = position - 1;
			}
			else
			{                                                        // Else, increase position by one.
				lowerbound = position + 1;
			}
			position = (lowerbound + upperbound) / 2;
		}
		
		if (lowerbound <= upperbound)
		{
			return true;
		}
		else
			return false;
	}
	
	static bool exists(int ints[], int size, int k)
	{
		return Answer::binarySearch(ints, 0, size, k);
	}
};




#endif /* defined(__commandline__Second__) */
