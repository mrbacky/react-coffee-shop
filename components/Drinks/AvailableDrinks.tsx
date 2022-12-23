import dynamic from "next/dynamic";
import { Suspense } from "react";
// My imports.
import FetchItems from "../../store/fetcher/fetch-items";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import type Drink from "../../models/Drink";
// CSS import.
import styles from "./AvailableDrinks.module.css";
// Dynamic import
const DrinkItemList = dynamic(() => import("./DrinkItem/DrinkItemList"));
import drinks from "../../drinksData/drinks.json";

function AvailableDrinks() {
  const drinkArray: Drink[] = drinks;
  return (
    <section className={styles.drinks}>
      <Card>
        {drinkArray ? (
          <Suspense fallback={<LoadingSpinner />}>
            <DrinkItemList drinks={drinkArray} />
          </Suspense>
        ) : (
          <section className={styles.drinksError}>
            <h3>Could not fetch menu items</h3>
          </section>
        )}
      </Card>
    </section>
  );
}

export default AvailableDrinks;
