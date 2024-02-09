import { atom_, type WritableAtom_ } from '@ctx-core/nanostores'
import { be_, ctx__new, type wide_ctx_T, ns_ctx__new } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_memo_tuple5_ } from '../index.js'
test('be_atom_memo_tuple5_', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, '', WritableAtom_<number>&{
		custom:string
	}>(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	foobar__set(ns_ctx__new(ctx, ctx__new()), 2)
	equal(foobar$_(ns_ctx__new(ctx, ctx__new())).$, 2)
	equal(foobar_(ns_ctx__new(ctx, ctx__new())), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_atom_memo_tuple5_|+id|+ns', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, 'test_ns', custom_T>(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, {
		id: 'foobar',
		ns: 'test_ns'
	})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	equal((ctx.s.test_ns.get('foobar')![0] as WritableAtom_<number>).$, 1)
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as WritableAtom_<number>).$, 2)
})
test('be_atom_memo_tuple5_|be', ()=>{
	const ctx = ns_ctx__new('test_ns')
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, 'test_ns', custom_T>(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const foobar$ = atom_(1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		ns: 'test_ns'
	}))
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 1)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	equal((ctx.s.test_ns.get('foobar')![0] as WritableAtom_<number>).$, 1)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set(ns_ctx__new(ctx__new(), ctx), 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as WritableAtom_<number>).$, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = WritableAtom_<number>&{ custom:string }
