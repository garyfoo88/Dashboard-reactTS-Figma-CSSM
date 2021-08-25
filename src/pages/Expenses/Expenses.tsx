import styles from "./Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import boxes from "../../assets/png/boxes.png";
import plant from "../../assets/png/plant.png";
import addIcon from "../../assets/png/addIcon.png";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import {
  data,
  previousExpenses,
  spendCategories,
  todayExpenses,
} from "../../utils/dummyData";
import optionIcon from "../../assets/png/menuIcon.png";

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseOver = (data: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <div className={styles.personImages}>
                  <img
                    className={styles.personOne}
                    src={personOne}
                    alt="person one"
                  />
                  <img
                    className={styles.personTwo}
                    src={personTwo}
                    alt="person two"
                  />
                  <img
                    className={styles.personThree}
                    src={personThree}
                    alt="person three"
                  />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="add" />
                </button>
              </div>
            </div>
            <p className={styles.dateRange}>01 - 25 March, 2021</p>
            <ResponsiveContainer width="100%" height="9%">
              <BarChart data={data}>
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => {
                    return (
                      <Cell
                        key={index}
                        cursor="pointer"
                        fill={
                          index === activeIndex
                            ? "rgb(21, 122, 255)"
                            : "rgba(21, 122, 255, .2)"
                        }
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button>
                <img src={optionIcon} alt="options" />
              </button>
            </div>
            <ul>
              {todayExpenses.map((expense) => (
                <li key={expense.id} className={styles.expenseItem}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img
                        className={styles.expenseOption}
                        src={expense.icon}
                        alt={expense.expense}
                      />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} ◦ {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    -{expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>
                Monday, 23 March 2020
              </p>
              <button>
                <img src={optionIcon} alt="options" />
              </button>
            </div>
            <ul>
              {previousExpenses.map((expense) => (
                <li key={expense.id} className={styles.expenseItem}>
                  <div className={styles.expenseItemLeft}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={styles.expenseItemDiv}
                    >
                      <img
                        className={styles.expenseOption}
                        src={expense.icon}
                        alt={expense.expense}
                      />
                    </div>
                    <div className={styles.expenseItemDetails}>
                      <p className={styles.expenseItemTitle}>
                        {expense.expense}
                      </p>
                      <p className={styles.expenseItemTime}>
                        {expense.time} ◦ {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={styles.expenseItemPrice}>
                    -{expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.moneyOverview}>
            <p className={styles.moneyOverviewTitle}>
              Where did your money go?
            </p>
            <ul>
              {spendCategories.map((category) => (
                <li key={category.id}>
                  <div className={styles.spendCategory}>
                    <p className={styles.spendCategoryName}>
                      {category.category}
                    </p>
                    <p className={styles.spendCategoryPrice}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.spendCategoryBar}>
                    <div
                      style={{
                        width: `
                      ${
                        (category.price /
                          spendCategories.reduce(
                            (acc, current) => acc + current.price,
                            0
                          )) *
                        100
                      }%
                    `,
                      }}
                      className={styles.spendCategoryColoredBar}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.saveMoneyDiv}>
              <img className={styles.boxes} src={boxes} alt="boxes" />
              <img className={styles.plant} src={plant} alt="plant" />
              <p className={styles.saveMoneyTitle}>Save more money</p>
              <p className={styles.saveMoneyInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                earum optio autem nam? Quo, harum non ad dicta atque debitis, ex
                voluptates eveniet architecto eaque sequi consequuntur, suscipit
                facilis asperiores?
              </p>
              <button className={styles.button}>VIEW TIPS</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
