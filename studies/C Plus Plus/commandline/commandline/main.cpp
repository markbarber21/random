//
//  main.cpp
//  commandline
//
//  Created by Mark Barber on 7/17/15.
//  Copyright (c) 2015 Mark Barber. All rights reserved.
//

#include <iostream>
#include <string>
using namespace std;

class MyClass
{
public:
	MyClass()
	{
		myT = "Base Class T";
	}
	~MyClass()
	{
		
	}
	
	virtual void FooBar()
	{
		std::cout << myT.c_str() << std::endl;
	};
	
protected:
	std::string myT;
};

class Extend : public MyClass
{
public:
	Extend() : MyClass()
	{
		myT = "Extend Class T";
	}
	~Extend() {}
	
	virtual void FooBar()
	{
//		MyClass::FooBar();
		std::cout << myT.c_str() << " (extend)" << std::endl;
	}
	
};

class Origional
{
public:
	Origional()
	{
		
	}
	~Origional(){}
	
	void FooBar()
	{
		std::cout << "Origionan and Unrelated Class" << std::endl;
	}
};

template <typename T>
class MyTClass
{
public:
	MyTClass()
	{
		t = 2;
		myT = T();
	}
	void PrintIt();

	static void Print(T& var);
	
private:
	T myT;
	const int& t;
};

template <typename T>
void MyTClass<T>::PrintIt()
{
	myT.FooBar();
}

template <typename T>
void MyTClass<T>::Print(T& var)
{
	var.FooBar();
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



#include <vector>
#include <algorithm>

struct Bar
{
	Bar()
	{
	}
	Bar (Bar* other)
	{
	}
};

struct Foo
{
public:
	Foo()
	{
		// The vector is constructed naturally
	}
	
	virtual ~Foo()
	{
		for (std::vector<Bar*>::iterator itr = bars_.begin(); itr != bars_.end(); ++itr)
		{
			delete (*itr);
		}
		bars_.clear();
	}
	
	Foo(const std::vector<Bar*>& other)
	{
		// Make a fast alocation
		bars_.reserve(other.size());
		
		// Could also std::transform
		for (std::vector<Bar*>::const_iterator itr = other.begin();
			 itr != other.end();
			 ++itr)
		{
			this->bars_.push_back(new Bar(*itr));
		}
	}

	Foo(const Foo& other)
	{
		*(this) = other;
	}

	Foo& operator= (const Foo& other)
	{
		// Make a fast alocation
		bars_.reserve(other.bars_.size());
		
		// Could also std::transform
		for (std::vector<Bar*>::const_iterator itr = other.bars_.begin();
			 itr != other.bars_.end();
			 ++itr)
		{
			this->bars_.push_back(new Bar(*itr));
		}
		
		return *this;
	}
	
	const std::vector<Bar*>& getBars() const
	{
		return bars_;
	}
private:
	std::vector<Bar*> bars_;
};


////

int main(int argc, const char * argv[]) {
	// insert code here...
	std::cout << "Hello, World!\n";
	
	std::vector<Bar*> vec;
	for (int ctr = 0; ctr < 30; ++ctr)
	{
		vec.push_back(new Bar());
	}
	
	Foo a;
	Foo b(vec);
	Foo c(b);
	Foo d = b;
	
	int t = 21;
	
	
//	for (int ctr = 0; ctr < 6; ++ctr) {
//		std::cout << "This is a bit of looping" << std::endl;
//	}
//	
//	std::auto_ptr<MyClass> inst (new Extend());
//	inst->FooBar();
//
//	Extend e;
//	MyTClass<Extend>::Print(e);
//
//	MyTClass<Origional> orig;
//	orig.PrintIt();
//

	
	
	
//	std::cout << "Answer: "
//	<< std::to_string(Palindrome::isPalindrome("Noel sees Leon."))
//	<< std::endl;
	
    return 0;
}


















































