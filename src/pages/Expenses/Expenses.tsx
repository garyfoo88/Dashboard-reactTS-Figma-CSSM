import styles from "./Expenses.module.scss";
import personOne from "../../assets/png/person1.png";
import personTwo from "../../assets/png/person2.png";
import personThree from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import { data } from "../../utils/dummyData";
import optionIcon from "../../assets/png/menuIcon.png";
import cartIcon from "../../assets/svg/cartIcon.svg";

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
                  <img src={personOne} alt="person one" />
                  <img src={personTwo} alt="person two" />
                  <img src={personThree} alt="person three" />
                </div>
                <button>
                  <img src={addIcon} alt="add" />
                </button>
              </div>
            </div>
            <p className={styles.dateRange}>01 - 25 March, 2021</p>
            <ResponsiveContainer width="100%" minHeight="9vh">
              <BarChart width={150} height={40} data={data}>
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
              <li className={styles.expenseItem}>
                <div className={styles.expenseItemLeft}>
                  <div className={styles.expenseItemDiv}>
                    <img src={cartIcon} alt="cart" />
                  </div>
                  <div className={styles.expenseItemDetails}>
                    <p className={styles.expenseItemTitle}>Grocery</p>
                    <p className={styles.expenseItemTime}>6.13pm ◦ Belanja di pasar</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
