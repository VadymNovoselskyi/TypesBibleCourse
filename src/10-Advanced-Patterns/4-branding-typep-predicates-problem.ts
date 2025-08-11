import { Brand } from "./utils/brand";

export type Approved<T> = Brand<T, "Approved">;

interface PurchaseDetails {
  item: string;
  price: number;
}

function isPurchaseApproved(details: PurchaseDetails): details is Approved<PurchaseDetails> {
  if (details.price > 1000) {
    return false;
  }
  return true;
}

function processPurchase(details: Approved<PurchaseDetails>) {
  // submiting to backend logic...
}

/*
  Your Job:
  Update isPurchaseApproved function so the following cases pass. 
*/

function submitHandler(details: PurchaseDetails) {
  if (isPurchaseApproved(details)) {
    processPurchase(details); // This should not error.
  }

  //@ts-expect-error
  processPurchase(details); // This should error.
}
