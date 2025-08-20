describe('Tax Calculator – smoke suite', () => {
  it('runs the test runner', () => {
    expect(true).toBeTrue();
  });

  it('adds numbers correctly', () => {
    expect(2 + 3).toBe(5);
  });

  it('multiplies numbers correctly', () => {
    expect(4 * 5).toBe(20);
  });

  it('string contains a substring', () => {
    expect('Tax Calculator').toContain('Tax');
  });

  it('array has expected length', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });

  it('object has required property', () => {
    const cfg = { rate: 0.1, currency: 'NOK' };
    expect(cfg).toEqual(jasmine.objectContaining({ rate: 0.1 }));
  });

  it('NaN is recognized as NaN', () => {
    expect(Number.isNaN(NaN)).toBeTrue();
  });
});
