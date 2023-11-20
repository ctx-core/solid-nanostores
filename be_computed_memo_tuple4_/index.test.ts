import { be_atom_triple_, computed_, type ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_|-autosubscribe', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1)
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		ctx=>base$_(ctx),
		base=>base + 1)
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
test('be_computed_memo_tuple4_|+autosubscribe', ()=>{
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
test('be_computed_memo_tuple4_|-autosubscribe|+id|+is_source_', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx,
	})
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		ctx=>base$_(ctx),
		base=>base + 1, {
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx,
		})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 3)
})
test('be_computed_memo_tuple4_|+autosubscribe|+id|+is_source_', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx,
	})
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(ctx=>base_(ctx) + 1, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx,
	})
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_([ctx__new(), ctx]).$, 3)
	equal(foobar_([ctx__new(), ctx]), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.get('foobar') as ReadableAtom_<number>).$, 3)
})
test('be_computed_memo_tuple4_|be', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx,
	})
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_<number, custom_T>(be_(ctx=>{
		const foobar$ = computed_(()=>base_(ctx) + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		is_source_: map_ctx=>map_ctx === ctx,
	}))
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
type custom_T = ReadableAtom_<number>&{ custom:string }

