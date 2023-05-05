import { atom_, computed_ } from '@ctx-core/nanostores'
import { ctx_, MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_|+base_name|+computed__new|+be__params', ()=>{
	const base_ = atom_(1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		// foobar__memo_,
		// foobar__memo,
	] = be_computed_memo_tuple4_(
		'foobar',
		()=>
			computed_(base_, base=>
				base + 1),
		{ is_source_ })
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_computed_memo_tuple4_|+base_name|+computed__new|-be__params', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
		// foobar__memo_,
		// foobar__memo,
	] = be_computed_memo_tuple4_(
		'foobar',
		()=>
			computed_(base_, base=>
				base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('be_computed_memo_tuple4_|-base_name|+computed__new|+be__params', ()=>{
	const base_ = atom_(1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar__,
		foobar_,
		// foobar__memo_,
		// foobar__memo,
	] = be_computed_memo_tuple4_(
		()=>
			computed_(base_,
				base=>base + 1),
		{ is_source_ })
	equal(foobar__([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base_.$ = 2
	equal(foobar__([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_computed_memo_tuple4_|-base_name|+computed__new|-be__params', ()=>{
	const base_ = atom_(1)
	const [
		foobar__,
		foobar_,
		// foobar__memo_,
		// foobar__memo,
	] = be_computed_memo_tuple4_(
		()=>
			computed_(base_,
				base=>base + 1))
	const ctx = ctx_()
	equal(foobar__(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base_.$ = 2
	equal(foobar__(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test.run()
