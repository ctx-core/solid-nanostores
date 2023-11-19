import { be_atom_triple_, type ReadableAtom_ } from '@ctx-core/nanostores'
import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1)
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(ctx=>base_(ctx) + 1)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
})
test('be_computed_memo_tuple4_|+id|+is_source_|+oninit', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1)
		.config({
			is_source_: map_ctx=>map_ctx === ctx,
		})
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_<
		number,
		// @formatter:off
		ReadableAtom_<number>&{ custom:string }
		// @formatter:on
	>(ctx=>base_(ctx) + 1)
		.config({
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		})
		.oninit((_ctx, foobar$)=>{
			if (Array.isArray(_ctx)) equal(_ctx[1], ctx)
			else equal(_ctx, ctx)
			foobar$.custom = 'custom-val'
		})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 2)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 3)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
