describe('Split Array function', function() {
  it('is able to split an empty array', function() {
    expect( split([]) ).toEqual( [] );
  });

  it('is able to split a single-element array', function() {
    expect( split([1]) ).toEqual( [1] );
  });

  it('is able to split a two-element array into two arrays', function() {
    expect( split([1, 2]) ).toEqual( [[1], [2]] );
  });

  it('is able to split a large even array into two halves', function() {
    expect( split([1, 2, 3, 4]) ).toEqual( [[1, 2], [3, 4]] );
  });

  it('is able to split a large odd array into two halves', function() {
    expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1, 2], [3, 4, 5]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two one-element arrays into one sorted array', function(){
    expect( merge([1], [2]) ).toEqual( [1, 2] );
  });

  it('is able to merge two two-element sorted arrays into one sorted array', function(){
    expect( merge([1, 2], [3, 4]) ).toEqual( [1, 2, 3, 4] );
  });

  it('is able to merge two different-length sorted arrays into one sorted array', function(){
    expect( merge([1, 2], [3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});
