import { UseRegister } from "./lib/use-register";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { PUBLIC_PATH } from "shared/config";
import { AuthLayout } from "widgets/auth-layout";

export const Register = () => {
  const { handleRegister, isLoading } = UseRegister();

  return (
    <AuthLayout>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form onFinish={handleRegister}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Введите почту!" }]}
        >
          <Input placeholder="Почта" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Введите username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: `Введите пароль` },
            () => ({
              validator(_, value) {
                if (!value || value.length >= 6) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`Минимальная длина пароля - 6 символов`)
                );
              },
            }),
          ]}
        >
          <Input placeholder="Пароль" type="password" />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            loading={isLoading}
            type="primary"
            size="large"
          >
            Отправить
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to={PUBLIC_PATH.LOGIN}>
            <Button block>Уже есть аккаунт</Button>
          </Link>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};
