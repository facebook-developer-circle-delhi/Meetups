package main

import (
	"fmt"
	"math/cmplx"
)

var	z complex128 = cmplx.Sqrt(-5 + 12i)

func main() {
	fmt.Printf("Type: %T Value: %v\n", z, z)
}
