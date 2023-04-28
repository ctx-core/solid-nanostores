import { atom_ } from '@ctx-core/nanostores'
import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_memo_tuple5_ } from '../index.js'
test('be_atom_memo_tuple5_|+base_name|+atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
		foobar__memo_,
		foobar__memo,
	] = be_atom_memo_tuple5_('foobar',
		()=>atom_(1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal(foobar__memo_(ctx)(), 1)
	equal(foobar__memo(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_atom_memo_tuple5_|+base_name|-atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
		foobar__memo_,
		foobar__memo
	] = be_atom_memo_tuple5_('foobar')
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	equal(foobar__memo_(ctx)(), undefined)
	equal(foobar__memo(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_atom_memo_tuple5_|-base_name|+atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
		foobar__memo_,
		foobar__memo,
	] = be_atom_memo_tuple5_(undefined, ()=>atom_(1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 1)
	equal(foobar_(ctx), 1)
	equal(foobar__memo_(ctx)(), 1)
	equal(foobar__memo(ctx), 1)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_atom_memo_tuple5_|-base_name|-atom__new', ()=>{
	const [
		foobar__,
		foobar_,
		foobar__set,
		foobar__memo_,
		foobar__memo,
	] = be_atom_memo_tuple5_()
	const ctx = ctx_()
	equal(foobar__(ctx).$, undefined)
	equal(foobar_(ctx), undefined)
	equal(foobar__memo_(ctx)(), undefined)
	equal(foobar__memo(ctx), undefined)
	foobar__set(ctx, 2)
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test.run()
