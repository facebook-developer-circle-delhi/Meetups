package main

import "fmt"

func main() {
	fmt.Println(split(42))

	fmt.Println(max(33,45))

	a, b := swap("hello", "world")
	fmt.Println(a, b)
}

func add(x, y int) int {
	return x + y
}

func max(num1, num2 int) int {
	/* local variable declaration */
	var result int 
 
	if (num1 > num2) {
	   result = num1
	} else {
	   result = num2
	}
	return result 
 }

 func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	//y = sum - x
	return
}