module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});


//9f0f87de05ebf1cddb628b5eb3018fb19122a6177edf12755636a64765d102f63b43f6443bc88f316ed1db2a1be19ee2b79eb1f165c31615fad22cfa581ee87e65d14ff05fd13fed15a2677d5652c56d92fc1ff147b842a9c582a3eae0eda39fdea19092fc73e380534b34e3befb60e2ba09794730a5f19229a4e0704eb6ea25
