import 'package:flutter/material.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';
import 'package:AGLJS/agljs.dart';

import 'dart:io';

import 'dart:developer' as developer;

void main() {
  AGLJS.api.init();

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<AfmApp> _apps = [];

  @override
  void initState() {
      super.initState();
      _retrieveApps();
  }

  void _retrieveApps() {
      Future<List<AfmApp>> runnablesFuture = promiseToFuture<List<AfmApp>>(AGLJS.afmMain.runnables());
      runnablesFuture.then((List<AfmApp> apps) => setState(() {
          _apps = apps;
      }));
  }

  void _processAppList(List<AfmApp> apps) {
      _apps = List.from(apps);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView.builder(
        itemCount: _apps.length,
        itemBuilder: (context, index) {
          return Card(
            child: ListTile(
              onTap: () { AGLJS.homescreen.showWindow(_apps[index].id); },
              title: Text(_apps[index].id),
            ),
          );
        },
      ),
    );
  }
}
