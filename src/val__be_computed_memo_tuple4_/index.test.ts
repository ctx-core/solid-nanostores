import { ctx_, MapCtx } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { val__be_atom_memo_tuple5_, val__be_computed_memo_tuple4_ } from '../index.js'
test('val__be_computed_memo_tuple4_|+base_name|+computed__new|+be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_atom_memo_tuple5_(()=>1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = val__be_computed_memo_tuple4_(
		'foobar',
		(ctx, asub)=>base_(ctx, asub) + 1,
		{ is_source_ })
	equal(foobar$_([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('val__be_computed_memo_tuple4_|+base_name|+computed__new|-be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_atom_memo_tuple5_(()=>1)
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = val__be_computed_memo_tuple4_(
		'foobar',
		(ctx, asub)=>base_(ctx, asub) + 1)
	const ctx = ctx_()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test('val__be_computed_memo_tuple4_|-base_name|+computed__new|+be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_atom_memo_tuple5_(()=>1)
	const ctx = ctx_()
	const is_source_ = (map_ctx:MapCtx)=>map_ctx === ctx
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = val__be_computed_memo_tuple4_(
		(ctx, asub)=>base_(ctx, asub) + 1,
		{ is_source_ })
	equal(foobar$_([ctx_(), ctx]).$, 2)
	equal(foobar_([ctx_(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx_(), ctx]).$, 3)
	equal(foobar_([ctx_(), ctx]), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('val__be_computed_memo_tuple4_|-base_name|+computed__new|-be__params', ()=>{
	const [
		_base$_,
		base_,
		base__set,
	] = val__be_atom_memo_tuple5_(()=>1)
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = val__be_computed_memo_tuple4_(
		(ctx, asub)=>base_(ctx, asub) + 1)
	const ctx = ctx_()
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
	base__set(ctx, 2)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_(ctx)(), 2)
	// equal(foobar__memo(ctx), 2)
})
test.run()