export const deepClone = (x) => JSON.parse(JSON.stringify(x));

export const initStateWithUniqIds = (rootNode) => {
  let curId = 1;
  const _addId = (node) => {
    node.customid = curId; // eslint-disable-line
    node.key = curId; // eslint-disable-line
    node.selected = false;

    node.title = `${node.component} ${node.customid}`;
    curId += 1;

    const { children } = node;
    if (children) {
      for (const child of children) {
        _addId(child);
      }
    }

    return node;
  };

  return _addId(deepClone(rootNode));
};

export const loginData = {
  component: "space",
  selected: false,
  props: {
    direction: "vertical",
    style: {
      backgroundColor: "white",
      padding: "12px",
    },
  },
  internalProps: {
    bounds: "parent",
    className: "dnd-element",
    draggable: false,
  },
  children: [
    {
      component: "row",
      selected: true,
      props: {
        justify: "space-between",
        style: {
          padding: "0 15px",
        },
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      children: [
        {
          selected: false,
          component: "title",
          props: {
            text: "Login",
          },
          internalProps: {
            bounds: "parent",
            className: "dnd-element",
            draggable: false,
          },
          customid: 3,
          key: 3,
          title: "title 3",
        },
        {
          component: "paragraph",
          props: {
            text: "Login Error",
            style: {
              color: "red",
            },
          },
          internalProps: {
            bounds: "parent",
            className: "dnd-element",
            draggable: false,
          },
          customid: 4,
          key: 4,
          selected: false,
          title: "paragraph 4",
        },
        {
          component: "handle",
          internal: true,
          props: {
            type: "target",
            position: "right",
            id: "login-error-1",
            style: {
              top: "13%",
              right: "4%",
            },
          },
        },
        {
          component: "handle",
          internal: true,
          props: {
            type: "input",
            position: "left",
          },
        },
      ],
      customid: 2,
      key: 2,
      title: "row 2",
    },
    {
      component: "paragraph",
      props: {
        text: "Choose one of the following login styles",
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      customid: 5,
      key: 5,
      selected: false,
      title: "paragraph 5",
    },
    {
      component: "space",
      props: {
        size: "small",
      },
      children: [
        {
          component: "button",
          props: {
            type: "primary",
            shape: "round",
            size: "middle",
            text: "With Facebook",
          },
          innerProps: {
            className: "dnd-element",
          },
          customid: 7,
          key: 7,
          selected: false,
          title: "button 7",
        },
        {
          component: "button",
          props: {
            type: "danger",
            shape: "round",
            size: "middle",
            text: "With Google",
          },
          internalProps: {
            bounds: "parent",
            className: "dnd-element",
            draggable: false,
          },
          customid: 8,
          key: 8,
          selected: false,
          title: "button 8",
        },
      ],
      customid: 6,
      key: 6,
      selected: false,
      title: "space 6",
    },
    {
      component: "paragraph",
      props: {
        text: "Or email address",
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      customid: 9,
      key: 9,
      selected: false,
      title: "paragraph 9",
    },
    {
      component: "input",
      props: {
        placeholder: "Email",
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      customid: 10,
      key: 10,
      selected: false,
      title: "input 10",
    },
    {
      component: "input",
      props: {
        placeholder: "password",
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      customid: 11,
      key: 11,
      selected: false,
      title: "input 11",
    },
    {
      component: "handle",
      internal: true,
      props: {
        type: "source",
        position: "right",
        id: "login-input-1",
        style: {
          top: "270px",
          position: "absolute",
          left: "96%",
        },
      },
    },
    {
      component: "handle",
      internal: true,
      props: {
        type: "source",
        position: "right",
        id: "login-input-2",
        style: {
          top: "230px",
          position: "absolute",
          left: "96%",
        },
      },
    },
    {
      component: "row",
      props: {
        justify: "space-between",
      },
      internalProps: {
        bounds: "parent",
        className: "dnd-element",
        draggable: false,
      },
      children: [
        {
          component: "button",
          props: {
            type: "primary",
            shape: "round",
            size: "middle",
            text: "Login",
          },
          internalProps: {
            bounds: "parent",
            className: "dnd-element",
            draggable: false,
          },
          customid: 13,
          key: 13,
          selected: false,
          title: "button 13",
        },
        {
          component: "paragraph",
          props: {
            text: "Create an Account",
          },
          internalProps: {
            bounds: "parent",
            className: "dnd-element",
            draggable: false,
          },
          customid: 14,
          key: 14,
          selected: false,
          title: "paragraph 14",
        },
      ],
      customid: 12,
      key: 12,
      selected: false,
      title: "row 12",
    },
    {
      component: "handle",
      internal: true,
      props: {
        type: "source",
        position: "bottom",
        id: "create-account-1",
        style: {
          left: "75%",
        },
      },
    },
    {
      component: "handle",
      internal: true,
      props: {
        type: "source",
        position: "right",
        id: "login-right-1",
      },
    },
  ],
  customid: 1,
  key: 1,
  title: "space 1",
};
