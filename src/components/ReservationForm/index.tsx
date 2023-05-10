import { towers } from "@/data/towers";
import { Button, DatePicker, Form, FormInstance, Input, Select } from "antd";
import { useRef } from "react";

const { TextArea } = Input;

import { timeRanges } from "@/data/timeRanges";
import styles from "./reservationForm.module.scss";
import { ISendData } from "./types";
import { rules } from "./validation";

const ReservationForm = () => {
  const formRef = useRef<FormInstance>(null);

  const onFinish = (values: ISendData) => {
    const newValues = {
      ...values,
      date: values["date"].format("DD-MM-YYYY"),
    };

    console.log(newValues);
    formRef.current?.resetFields();
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  return (
    <Form
      layout="vertical"
      ref={formRef}
      onFinish={onFinish}
      style={{ padding: "20px" }}
    >
      <div className={styles.row}>
        <Form.Item
          label="Башня"
          name="tower"
          className={styles.col}
          rules={rules}
        >
          <Select>
            {towers.map((tower, i) => (
              <Select.Option key={i} value={tower.value}>
                {tower.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Этаж"
          name="floor"
          className={styles.col}
          rules={rules}
        >
          <Select>
            {[...Array(25).keys()].map((floor, i) => (
              <Select.Option key={i} value={floor + 3}>
                {`Этаж ${floor + 3}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item label="Переговорка" name="room" rules={rules}>
        <Select>
          {[...Array(10).keys()].map((room, i) => (
            <Select.Option key={i} value={room + 1}>
              {`Комната ${room + 1}`}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <div className={styles.row}>
        <Form.Item
          label="Дата"
          name="date"
          className={styles.col}
          rules={rules}
        >
          <DatePicker placeholder="" />
        </Form.Item>

        <Form.Item
          label="Время"
          name="time"
          className={styles.col}
          rules={rules}
        >
          <Select>
            {timeRanges.map((time, i) => (
              <Select.Option key={i} value={time}>
                {time}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <Form.Item label="Комментарий" name="comments">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "10px" }}
        >
          Отправить
        </Button>

        <Button htmlType="button" onClick={onReset}>
          Сбросить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReservationForm;
