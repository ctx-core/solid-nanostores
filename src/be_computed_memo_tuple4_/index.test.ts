import { atom_, computed_ } from '@ctx-core/nanostores'
import { ctx_ } from '@ctx-core/object'
import { throws } from 'assert'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_|+base_name|+computed__new', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
		foobar__memo_,
		foobar__memo,
	] = be_computed_memo_tuple4_(
		'foobar',
		()=>
			computed_(base_, base=>
				base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar__memo_(ctx)(), 2)
	equal(foobar__memo(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_computed_memo_tuple4_|+base_name|-computed__new', ()=>{
	throws(
		()=>
			be_computed_memo_tuple4_(...['foobar'] as any),
		new Error('be_computed_pair_|computed__new argument is required'))
})
test('be_computed_memo_tuple4_|-base_name|+computed__new', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
		foobar__memo_,
		foobar__memo,
	] = be_computed_memo_tuple4_(
		undefined,
		()=>
			computed_(base_,
				base=>base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	equal(foobar__memo_(ctx)(), 2)
	equal(foobar__memo(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_computed_memo_tuple4_|-base_name|-computed__new', ()=>{
	throws(
		()=>
			be_computed_memo_tuple4_(...[] as any),
		new Error('be_computed_pair_|computed__new argument is required'))
})
test.run()
