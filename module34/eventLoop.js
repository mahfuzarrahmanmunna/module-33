function a() {
    b()
    console.log('a')
}
function b() {
    c()
    console.log('b')
}
function c() {
    d()
    console.log('c')
}
function d() {
    e()
    console.log('d')
}
function e() {
    // a()
    console.log('e')
}
// a()