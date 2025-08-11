import { Brand } from "./utils/brand";

export type Approved<T> = Brand<T, "Approved">;

interface PurchaseDetails {
  item: string;
  price: number;
}

function assertAmount(details: PurchaseDetails): asserts details is Approved<PurchaseDetails> {
  if (details.price > 1000) {
    throw new Error("Amound exeeds the max limit.");
  }
}

function processPurchase(details: Approved<PurchaseDetails>) {
  // submiting to backend logic...
}

/*
  Your Job:
  Update isPurchaseApproved function so the following cases pass. 
*/

function submitHandler(details: PurchaseDetails) {
  // @ts-expect-error
  processPurchase(details); // This should error.

  assertAmount(details);
  processPurchase(details); // This should not error.
}
